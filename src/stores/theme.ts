import { observable, action, makeObservable } from 'mobx'
import mobx from 'mobx'
import { reaction } from 'mobx';
import { autorun, set, toJS } from 'mobx'

export function autoSave(_this: any, name: string) {
	const storedJson = localStorage.getItem(name)
	if (storedJson) {
		set(_this, JSON.parse(storedJson))
	}
	autorun(() => {
		const value = toJS(_this)
		localStorage.setItem(name, JSON.stringify(value))
	})
}

class Store {

  public accessToken: string

  constructor() {
    makeObservable(this);
    this.accessToken = '' 
		autoSave(this, 'store')
  }

  @observable darkTheme: boolean = false

  @action
  changeTheme() {
    this.darkTheme = !this.darkTheme;
    console.log('dark theme is ', this.darkTheme)
  }  
}


export default new Store()
