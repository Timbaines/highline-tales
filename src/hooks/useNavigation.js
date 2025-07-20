import { useLocation } from 'react-router-dom';
import navItems from '@/constants/navigation.js';

export const useNavigation = () => {
    const location = useLocation();

    // PRIMARY NAV HOOK
    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    // MOBILE NAV HOOK
    const isActiveLinkWithStartsWith = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        return path !== '/' && location.pathname.startsWith(path);
    };

    const filteredNavItems = navItems.filter(item => item.href !== '/');

    return {
        navItems,
        filteredNavItems,
        isActiveLink,
        isActiveLinkWithStartsWith
    };
};