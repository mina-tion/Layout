import { createContext, useContext } from 'react';
import { configure, observable } from 'mobx';

import postsStore from './Posts';
import themeStore from './theme';

configure({ enforceActions: 'observed' });

class RootStore {
	@observable postsStore = postsStore;
	@observable themeStore = themeStore;
}

const rootStore = new RootStore();

export const StoreContext = createContext<RootStore>(rootStore);

export const useStore = (): RootStore => {
	const store = useContext(StoreContext);
	if (!store) {
		throw new Error('You have forgot to use StoreProvider, shame on you.');
	}
	return store;
};

export default new RootStore();
