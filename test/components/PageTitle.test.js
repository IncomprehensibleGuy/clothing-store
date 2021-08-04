import { mount } from '@vue/test-utils'
import PageTitle from '@/components/PageTitle'

describe('PageTitle.vue', () => {
  test('contain correct page title', async () => {
    // Arrange
    const component = mount(PageTitle)
    // Act
    await component.setProps({ title: '12345' })
    // Assert
    expect(component.text()).toContain('12345')
  })
})
