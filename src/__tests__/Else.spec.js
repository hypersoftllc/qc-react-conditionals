/* eslint-env jest */
/* eslint padded-blocks: "off" */

import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import TestRenderer from 'react-test-renderer'

import Else from '../Else'


describe('Else.jsx', function () {

  describe('Else', function () {

    it('should render with no props and no children', function () {
      let comp

      comp = TestRenderer.create(
        <Else/>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `false` child as `null`', function () {
      let comp


      comp = TestRenderer.create(
        <Else>{ false }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ true && false }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ false }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ true && false }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `true` child as `null`', function () {
      let comp


      comp = TestRenderer.create(
        <Else>{ true }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ true || false }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ true }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ true || false }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `Date` child as `.toValue().toString()`', function () {
      let comp, date

      date = Date.UTC(2000, 0, 1)

      comp = TestRenderer.create(
        <Else>{ date }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ date }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single non-zero number child as its string value', function () {
      let comp, tree


      comp = TestRenderer.create(
        <Else>{-Infinity}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{-Number.MAX_VALUE}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{-Number.MAX_SAFE_INTEGER}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{-42}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{-1}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{1}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{42}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{Number.MAX_SAFE_INTEGER}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{Number.MAX_VALUE}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{Infinity}</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ 42 }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single zero child as `0`', function () {
      let comp


      comp = TestRenderer.create(
        <Else>{ 0 }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ 1 - 1 }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ 0 }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `NaN` child as "NaN"', function () {
      let comp


      comp = TestRenderer.create(
        <Else>{ NaN }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ parseInt('asdf') }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ NaN }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single non-empty string child as its string value', function () {
      let comp, tree


      comp = TestRenderer.create(
        <Else>0</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ '0' }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>non-empty</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ 'non-empty' }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ `non-empty` }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ `non` + '-' + "empty" }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single empty string child as ""', function () {
      let comp


      comp = TestRenderer.create(
        <Else>{ '' }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ '  '.trim() }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ '' }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `undefined` child as `null`', function () {
      let comp


      comp = TestRenderer.create(
        <Else>{ undefined }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Else>{ {}.foo }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ undefined }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should throw with a single `Error` child', function () {
      let comp, consoleErrorOriginal, onError

      consoleErrorOriginal = console.error
      try {
        // Prevent error message in console during test runs
        console.error = () => {}
        onError = jest.fn()
        comp = TestRenderer.create(
          <ErrorBoundary onError={onError}>
            <Else>{ [Error('Oh oh!')] }</Else>
          </ErrorBoundary>
        )

        expect(onError).toHaveBeenCalled()
        expect(comp.toJSON()).toMatchSnapshot()
      } finally {
        console.error = consoleErrorOriginal
      }
    })

    it('should render an empty array child as if there were no children', function () {
      let comp


      comp = TestRenderer.create(
        <Else>{ [] }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ [] }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ [] }</div>).toJSON())
    })

    it('should render an array child as expected based on type', function () {
      let comp


      comp = TestRenderer.create(
        <Else>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</Else>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Else>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</Else></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</div>).toJSON())
    })

  })

})
