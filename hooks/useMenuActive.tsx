import { useRouter, usePathname } from "next/navigation";

const useMenuActive = (route: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname.includes(route) && route.length > 1) ||
    pathname === route;
  return isActive;
};

export default useMenuActive;
