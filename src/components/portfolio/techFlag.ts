/** "Microsoft Sentinel" -> "microsoft-sentinel", rendered as a --flag on project cards. */
export const techFlag = (tech: string) =>
  tech.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
