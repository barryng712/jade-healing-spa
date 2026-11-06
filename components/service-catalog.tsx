import { ServiceGroupList } from "@/components/service-group-list";
import { menuGroups } from "@/lib/menu";
import { servicePhotos } from "@/lib/photos";

export function ServiceCatalog() {
  return (
    <ServiceGroupList
      groups={menuGroups}
      photos={servicePhotos}
      showCategory
      className="mt-6 md:mt-8"
    />
  );
}
