// (1) Matcher
// "이거 맞아?" 라고 물어보는 함수라고 생각하면 된다.
// 기대한 값이 실제 반환되는 값과 일치하는 지를 확인하는 작업을 해준다.

import { getUser } from '~/lib/utils/format'

// toEqual : 객체가 일치하는지 검증한다
it('객체가 일치한지 확인한다', function () {
  expect(getUser('테스트')).toEqual({
    id: '테스트',
    email: 'user테스트@test.com',
  })
})

it('단순한 값 비교', function () {
  expect(getUser('테스트').id).toBe('테스트')
})
