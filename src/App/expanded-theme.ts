import '@material-ui/core/styles';

declare module '@mui/material/styles' {
    interface Palette {
        myCustomTheme?: Palette['primary'];
    }
    interface PaletteOptions {
        myCustomTheme?: PaletteOptions['primary'];
    }
    interface PaletteColor {
        myBtn?: string;
        success?: string;
        error?: string;
        warning?: string;
        like?: string;
    }

    interface SimplePaletteColorOptions {
        myBtn?: string;
        success?: string;
        error?: string;
        warning?: string;
        like?: string;
    }
    interface BreakpointOverrides {
        smallSidebar: true;
        laptopMini: true;
        mdField: true;
    }
}
