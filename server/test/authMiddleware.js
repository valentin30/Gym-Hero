const { expect } = require('chai')
const jwt = require('jsonwebtoken')
const sinon = require('sinon')
const authCheck = require('../middleware/authCheck')

describe('Auth middleware', () => {
    it('should throw an error if authorization header is not provided', () => {
        const req = {
            get() {
                return null
            },
        }
        expect(authCheck.bind(this, req, {}, () => {})).to.throw(
            'not authenticated',
        )
    })
    it('should throw an error if the jwt token cannot be verified', () => {
        const req = {
            get() {
                return 'invalidToken'
            },
        }
        expect(authCheck.bind(this, req, {}, () => {})).to.throw()
    })
    it('should provide a userId after decoding the token', () => {
        const req = {
            get() {
                return 'validToken'
            },
        }
        sinon.stub(jwt, 'verify')
        jwt.verify.returns({ userId: 'userId' })
        authCheck(req, {}, () => {})
        expect(req).to.have.property('userId')
        jwt.verify.restore()
    })
})
