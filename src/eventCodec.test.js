import { codec } from './eventCodec'

describe('codec', () => {

  test('decode', () => {
    expect(codec(['a', 'b']).decode(['type', 10, '42'])).toEqual({
      type: 'type', 
      a: 10,
      b: '42'
    })
  })

  test('encode', () => {
    expect(codec(['a', 'b']).encode({
      type: 'type', 
      a: 10,
      b: '42'
    })).toEqual(['type', 10, '42'])
  })
})
