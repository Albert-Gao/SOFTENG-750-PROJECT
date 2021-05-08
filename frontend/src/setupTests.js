// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

window.alert = jest.fn()

jest.mock('./api/auth.api')
jest.mock('./api/comments.api')
jest.mock('./api/news.api')
jest.mock('./api/users.api')
