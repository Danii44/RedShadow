import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { MenuItem } from "@/types/menu-dt";

export const useHeaderMenu = (): MenuItem[] => {
    return darkMenu;
};
