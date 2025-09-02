import { configureStore, createSlice } from '@reduxjs/toolkit';

// Page Data Slice
const pageDataSlice = createSlice({
  name: 'pageData',
  initialState: {
    data: {},
    loading: false,
    error: null,
    cache: {}
  },
  reducers: {
    setPageData: (state, action) => {
      const { pageKey, data } = action.payload;
      state.data[pageKey] = data;
      state.cache[pageKey] = {
        data,
        timestamp: Date.now()
      };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

// SEO Data Slice
const seoSlice = createSlice({
  name: 'seo',
  initialState: {
    currentPage: {},
    loading: false
  },
  reducers: {
    setSEOData: (state, action) => {
      state.currentPage = action.payload;
    },
    setSEOLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

// UI State Slice
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarOpen: false,
    theme: 'light',
    animations: {
      enabled: true,
      initialized: false
    },
    scripts: {
      loaded: [],
      loading: [],
      failed: []
    }
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setAnimationsInitialized: (state, action) => {
      state.ui.animations.initialized = action.payload;
    },
    addLoadedScript: (state, action) => {
      state.scripts.loaded.push(action.payload);
      state.scripts.loading = state.scripts.loading.filter(s => s !== action.payload);
    },
    addLoadingScript: (state, action) => {
      state.scripts.loading.push(action.payload);
    },
    addFailedScript: (state, action) => {
      state.scripts.failed.push(action.payload);
      state.scripts.loading = state.scripts.loading.filter(s => s !== action.payload);
    },
    setAnimationsEnabled: (state, action) => {
      state.ui.animations.enabled = action.payload;
    },
    setPerformanceEnabled: (state, action) => {
      state.ui.performance.enabled = action.payload;
    },
    updatePerformanceMetrics: (state, action) => {
      state.ui.performance.metrics = { ...state.ui.performance.metrics, ...action.payload };
    },
    setThemeMode: (state, action) => {
      state.ui.theme.mode = action.payload;
    }
  }
});

export const { setPageData, setLoading, setError, clearError } = pageDataSlice.actions;
export const { setSEOData, setSEOLoading } = seoSlice.actions;
export const { 
  toggleSidebar, 
  setTheme, 
  setAnimationsInitialized, 
  addLoadedScript, 
  addLoadingScript, 
  addFailedScript,
  setAnimationsEnabled,
  setPerformanceEnabled,
  updatePerformanceMetrics,
  setThemeMode
} = uiSlice.actions;

export const store = configureStore({
  reducer: {
    pageData: pageDataSlice.reducer,
    seo: seoSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
});

export default store;