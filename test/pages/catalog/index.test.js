import { mount } from '@vue/test-utils'
import index from '@/pages/catalog/index'

// TODO: images mock
describe('index.vue', () => {
  test('contain correct page title', () => {
    // Arrange
    const page = mount(index)
    // Act
    // Assert
    expect(page.html()).toContain('Мужская обувь')
  })
})
