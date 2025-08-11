/***** MODULE STYLES *****/
import styles from '@/layouts/components/Grid.module.css';

const VARIANT_MAP = {
    default: 'default',
    grid: null, // SPECIAL CASE: NO ADDITIONAL CLASS BEYOND DEFAULT
    none: null,
    // COLUMNS
    one: 'default',
    '1col': 'default',
    two: 'twoColumn',
    '2col': 'twoColumn',
    three: 'threeColumn',
    '3col': 'threeColumn',
    // SEMANTIC LAYOUTS
    asymmetric: 'asymmetric',
    home: 'homePageGrid',
    homepage: 'homePageGrid',
    activity: 'activityGrid',
    essentials: 'essentialsGrid',
    // RESPONSIVE AUTO FIT GRID
    autofit: 'autoFit',
    autofill: 'autoFit',
};

function normalize(key) {
    if (!key) return 'default';
    // LOWERCASE, REPLACE WHITESPACE, UNDERSCORE, AND DASH WITH NO SPACES
    const compact = String(key)
        .toLowerCase()
        .replace(/\s+|_|-/g, '');
    return compact;
}

export default function Grid({ children, variant = 'default', className = '' }) {
    const norm = normalize(variant);
    const mapped = Object.prototype.hasOwnProperty.call(VARIANT_MAP, norm) ? VARIANT_MAP[norm] : variant;
    const variantClass = mapped ? styles[mapped] : '';

    const classes = [styles.grid, variantClass, className].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {children}
        </div>
    );
}