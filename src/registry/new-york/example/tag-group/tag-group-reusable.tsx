import { SomaTagGroup, Tag } from "@/registry/new-york/ui/tag-group"

export default function TagGroupReusable() {
  return (
    <SomaTagGroup label="Ice cream flavor" selectionMode="single">
      <Tag>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </SomaTagGroup>
  )
}
