/* eslint-env jest */
/* eslint padded-blocks: "off" */

import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import TestRenderer from 'react-test-renderer'

import When from '../When'


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
        let comp, tree


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
          <When>{ parseInt('asdf') }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When>{ NaN }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single non-empty string child as `null`', function () {
        let comp, tree


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


        expect(comp.toJSON()).toEqual(TestRenderer.create(<div></div>).toJSON())
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
          <When is={true}>{ false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ true && false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ true && false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `true` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When is={true}>{ true }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ true || false }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ true }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ true || false }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `Date` child as `.toValue().toString()`', function () {
        let comp, date

        date = Date.UTC(2000, 0, 1)

        comp = TestRenderer.create(
          <When is={true}>{ date }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ date }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single non-zero number child as its string value', function () {
        let comp, tree


        comp = TestRenderer.create(
          <When is={true}>{-Infinity}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{-Number.MAX_VALUE}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{-Number.MAX_SAFE_INTEGER}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{-42}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{-1}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{1}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{42}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{Number.MAX_SAFE_INTEGER}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{Number.MAX_VALUE}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{Infinity}</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ 42 }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single zero child as `0`', function () {
        let comp


        comp = TestRenderer.create(
          <When is={true}>{ 0 }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ 1 - 1 }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ 0 }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `NaN` child as "NaN"', function () {
        let comp


        comp = TestRenderer.create(
          <When is={true}>{ NaN }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ parseInt('asdf') }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ NaN }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single non-empty string child as its string value', function () {
        let comp, tree


        comp = TestRenderer.create(
          <When is={true}>0</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ '0' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>non-empty</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ 'non-empty' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ `non-empty` }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ `non` + '-' + "empty" }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single empty string child as ""', function () {
        let comp


        comp = TestRenderer.create(
          <When is={true}></When>
        )

        expect(comp.toJSON()).toMatchSnapshot()



        comp = TestRenderer.create(
          <When is={true}>{ '' }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ '  '.trim() }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ '' }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

      it('should render a single `undefined` child as `null`', function () {
        let comp


        comp = TestRenderer.create(
          <When is={true}>{ undefined }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <When is={true}>{ {}.foo }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ undefined }</When></div>
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
              <When is={true}>{ [Error('Oh oh!')] }</When>
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
          <When is={true}>{ [] }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ [] }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ [] }</div>).toJSON())
      })

      it('should render an array child as expected based on type', function () {
        let comp


        comp = TestRenderer.create(
          <When is={true}>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</When>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        comp = TestRenderer.create(
          <div><When is={true}>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</When></div>
        )

        expect(comp.toJSON()).toMatchSnapshot()


        expect(comp.toJSON()).toEqual(TestRenderer.create(<div>{ ['Hello!', ' ', 'Today I am ', 42, ' years old!'] }</div>).toJSON())
      })

    })

  })

})
