# Figma MCP setup (owner action)

Verified in this workspace on 2026-11-01: **Figma MCP is not connected**. No Figma tools are visible in the agent session.

A project config was added at `.cursor/mcp.json` pointing at the official remote server:

`https://mcp.figma.com/mcp`

## What you need to click

Preferred (official plugin):

1. In Cursor, press `Cmd+Shift+P`.
2. Open **Chat**.
3. Type `/add-plugin figma` and submit.
4. Click **Add Plugin**.
5. `Cmd+Shift+P` → **Cursor Settings**.
6. Open **Tools & MCP**.
7. Click **Connect** next to **Figma**.
8. In the browser window, sign in to Figma if asked.
9. Click **Allow access**. You are granting Cursor permission to read (and, depending on your Figma seat, write) Figma files. You are not giving the chat your password.
10. Return to this chat and say: “Figma is connected — please verify.”

Manual fallback if the plugin is unavailable: Settings → Tools & MCP → confirm the `figma` server from `.cursor/mcp.json` → **Connect** → **Allow access**.

## What we will verify after you connect

- MCP server shows as on
- Tools such as `whoami`, `get_design_context`, `get_screenshot` are visible
- The agent can inspect a Figma file you share (paste a Figma URL)
- Whether **write** tools (`use_figma`, `create_new_file`) succeed on your Figma plan/seat

We will **not** claim canvas design creation works until that write test succeeds.

## Plans

Figma’s remote MCP is documented for Starter and higher, with seat type controlling create/edit. Cursor Cloud Agents are unrelated and remain unavailable on Cursor Free.
