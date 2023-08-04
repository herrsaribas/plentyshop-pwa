import { Ref } from 'vue';
import type { Facet, FacetSearchCriteria } from '@plentymarkets/plentymarkets-sdk/packages/api-client/src';

export interface UseProductsState {
  data: Facet;
  loading: boolean;
}

export type FetchProducts = (params: FacetSearchCriteria) => Promise<Facet>;

export interface UseProducts {
  data: Readonly<Ref<UseProductsState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchProducts: FetchProducts;
}

export type UseProductsReturn = () => UseProducts;