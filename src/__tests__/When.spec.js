/* eslint-env jest, node */
/* eslint max-len: "off" */
/* eslint padded-blocks: "off" */

import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import TestRenderer from 'react-test-renderer'

import When from '../When'

const TRUE = true

describe('When.jsx', function () {

  describe('When', function () {

    it('should render with no props and no children', function () {
      let comp

      comp = TestRenderer.create(
        <When/>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    describe('declared with a falsy `is` property', function () {

      it('should render a single `false` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>{ false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ true && false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ true && false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `true` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>{ true }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ true || false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ true }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ true || false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `Date` child as `null`', function () {
        let comp, date

        date = Date.UTC(2000, 0, 1)

        comp = TestRenderer.create(
          <When>{ date }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ date }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single non-zero number child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>{-Infinity}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{-Number.MAX_VALUE}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{-Number.MAX_SAFE_INTEGER}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{-42}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{-1}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{1}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{42}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{Number.MAX_SAFE_INTEGER}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{Number.MAX_VALUE}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{Infinity}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ 42 }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single zero child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>{ 0 }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ 1 - 1 }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ 0 }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `NaN` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>{ NaN }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ parseInt('asdf', 10) }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ NaN }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single non-empty string child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>0</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ '0' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>non-empty</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ 'non-empty' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ `non-empty` }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ `non` + '-' + "empty" }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single empty string child as ""', function () {
        let comp


        comp = TestRenderer.create(
          <When>{ '' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ '  '.trim() }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ '' }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `undefined` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>{ undefined }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When>{ {}.foo }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ undefined }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should not throw with a single `Error` child', function () {
        let comp, onError

        onError = jest.fn()
        comp = TestRenderer.create(
          <ErrorBoundary onError={onError}>
            <When>{ [Error('Oh oh!')] }</When>
          </ErrorBoundary>
        )

        expect(onError).not.toHaveBeenCalled()
        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render an empty array child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>{ [] }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ [] }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        expect(comp.toJSON()).toEqual(TestRenderer.create(<div/>).toJSON())
      })

      it('should render an array child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ null }</div>).toJSON())
      })

    })

    describe('declared with a truthy `is` property', function () {

      it('should render a single `false` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}>{ false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ true && false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ true && false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `true` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}>{ true }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ true || false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ true }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ true || false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `Date` child as `.toValue().toString()`', function () {
        let comp, date

        date = Date.UTC(2000, 0, 1)

        comp = TestRenderer.create(
          <When is={TRUE}>{ date }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ date }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single non-zero number child as its string value', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}>{-Infinity}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{-Number.MAX_VALUE}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{-Number.MAX_SAFE_INTEGER}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{-42}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{-1}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{1}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{42}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{Number.MAX_SAFE_INTEGER}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{Number.MAX_VALUE}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{Infinity}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ 42 }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single zero child as `0`', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}>{ 0 }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ 1 - 1 }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ 0 }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `NaN` child as "NaN"', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}>{ NaN }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ parseInt('asdf', 10) }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ NaN }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single non-empty string child as its string value', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}>0</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ '0' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>non-empty</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ 'non-empty' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ `non-empty` }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ `non` + '-' + "empty" }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single empty string child as ""', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}/>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ '' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ '  '.trim() }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ '' }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `undefined` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}>{ undefined }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={TRUE}>{ {}.foo }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ undefined }</When></div>
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
              <When is={TRUE}>{ [Error('Oh oh!')] }</When>
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
          <When is={TRUE}>{ [] }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ [] }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ [] }</div>).toJSON())
      })

      it('should render an array child as expected based on type', function () {
        let comp


        comp = TestRenderer.create(
          <When is={TRUE}>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={TRUE}>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</div>).toJSON())
      })

    })

  })

})
