import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  const segments: string[] =
    body.actions[0].updateEngagementPanelAction.content.transcriptRenderer.content.transcriptSearchPanelRenderer.body.transcriptSegmentListRenderer.initialSegments.map(
      (seg: any) => seg.transcriptSegmentRenderer.snippet.runs[0].text
    );

  return res.status(200).json({ data: segments, text: segments.join(" ") });
}
