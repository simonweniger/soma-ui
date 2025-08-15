import { SomaMenu, MenuItem } from "@/registry/default/ui/menu"

export default function MenuReusable() {
  return (
    <SomaMenu variant="outline" label="Edit">
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuItem>Delete Item</MenuItem>
    </SomaMenu>
  )
}
