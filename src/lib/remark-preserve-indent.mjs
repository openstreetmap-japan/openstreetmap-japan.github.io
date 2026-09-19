// Restore leading indentation that CommonMark strips from paragraph
// continuation lines, by walking paragraph children and matching them
// to source lines via the paragraph's start line + cumulative break count.
// Run AFTER remark-breaks so each line is its own text node.
import { visit } from "unist-util-visit";

const NBSP = " ";

export default function remarkPreserveIndent() {
    return (tree, file) => {
        const source = String(file.value ?? "");
        const lines = source.split(/\r?\n/);

        visit(tree, "paragraph", (paragraph) => {
            const startLine = paragraph.position?.start?.line;
            if (!startLine) return;

            let lineOffset = 0;
            for (let i = 0; i < paragraph.children.length; i++) {
                const node = paragraph.children[i];
                if (node.type === "break") {
                    lineOffset++;
                    continue;
                }
                if (node.type !== "text") continue;
                if (i === 0) continue;
                const prev = paragraph.children[i - 1];
                if (!prev || prev.type !== "break") continue;

                const lineIdx = startLine - 1 + lineOffset;
                const srcLine = lines[lineIdx] ?? "";
                const m = srcLine.match(/^[ \t]+/);
                if (!m) continue;
                const count = m[0].replace(/\t/g, "    ").length;
                node.value = NBSP.repeat(count) + node.value;
            }
        });
    };
}
