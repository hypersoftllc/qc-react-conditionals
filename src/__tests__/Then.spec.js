/* eslint-env jest, node */
/* eslint max-len: "off" */
/* eslint padded-blocks: "off" */

import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import TestRenderer from 'react-test-renderer'

import Then from '../Then'


describe('Then.jsx', function () {

  describe('Then', function () {

    it('should render with no props and no children', function () {
      let comp

      comp = TestRenderer.create(
        <Then/>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `false` child as `null`', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{ false }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ true && false }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ false }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ true && false }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `true` child as `null`', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{ true }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ true || false }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ true }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ true || false }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `Date` child as `.toValue().toString()`', function () {
      let comp, date

      date = Date.UTC(2000, 0, 1)

      comp = TestRenderer.create(
        <Then>{ date }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ date }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single non-zero number child as its string value', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{-Infinity}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{-Number.MAX_VALUE}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{-Number.MAX_SAFE_INTEGER}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{-42}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{-1}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{1}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{42}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{Number.MAX_SAFE_INTEGER}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{Number.MAX_VALUE}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{Infinity}</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ 42 }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single zero child as `0`', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{ 0 }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ 1 - 1 }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ 0 }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `NaN` child as "NaN"', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{ NaN }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ parseInt('asdf', 10) }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ NaN }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single non-empty string child as its string value', function () {
      let comp


      comp = TestRenderer.create(
        <Then>0</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ '0' }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>non-empty</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ 'non-empty' }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ `non-empty` }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ `non` + '-' + "empty" }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single empty string child as ""', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{ '' }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ '  '.trim() }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ '' }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    it('should render a single `undefined` child as `null`', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{ undefined }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <Then>{ {}.foo }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ undefined }</Then></div>
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
            <Then>{ [Error('Oh oh!')] }</Then>
          </ErrorBoundary>
        )

        expect(onError).toHaveBeenCalled()
        expect(comp.toJSON()).toMatchSnapshot()
      }
      finally {
        console.error = consoleErrorOriginal
      }
    })

    it('should render an empty array child as if there were no children', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{ [] }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ [] }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ [] }</div>).toJSON())
    })

    it('should render an array child as expected based on type', function () {
      let comp


      comp = TestRenderer.create(
        <Then>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</Then>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      comp = TestRenderer.create(
        <div><Then>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</Then></div>
      )

      expect(comp.toJSON()).toMatchSnapshot()


      expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</div>).toJSON())
    })

  })

})
