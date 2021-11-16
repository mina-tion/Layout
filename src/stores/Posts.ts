import { observable, action, makeObservable } from 'mobx'

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable foo: string = 'TEST LOGIN'

  @action
  getFoo() {
    return this.foo
  }
}

export default new Store()
