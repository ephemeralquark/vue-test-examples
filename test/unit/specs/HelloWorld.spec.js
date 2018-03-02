import HelloWorld from '@/components/HelloWorld'
import { shallow } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  let subject, wrapper
  beforeEach(() => {
    wrapper = shallow(HelloWorld)
    subject = wrapper.vm
  })
  
  it('should render correct contents', () => {
    expect(wrapper.find('h1').text()).to.equal('Welcome to Your Vue.js App')
  })
})
