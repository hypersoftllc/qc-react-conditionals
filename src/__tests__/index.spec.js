/* eslint-env jest */
/* eslint padded-blocks: "off" */

import React from 'react'
import TestRenderer from 'react-test-renderer'

import Conds, { Case, Else, ElseIf, If, Then, When } from '../'
import _Case from '../Case'
import _Else from '../Else'
// import _ElseIf from '../ElseIf'
import _If from '../If'
import _Then from '../Then'
import _When from '../When'


xdescribe('TODO', function () {

  it(':', function () {
    expect('* Hide ElseIf code.').toBe(true)
    expect('* Add If specs.').toBe(true)
    expect('* Finish all specs.').toBe(true)
    expect('* Allow is property to be a function.').toBe(true)
    expect('  + Use to allow lazy condition evaluation. But not really needed without ElseIf.').toBe(true)
    expect('  + Document how to use the existance of a function as a condition.').toBe(true)
    expect('* Add propType checks.').toBe(true)
    expect('  + Check if webpack can remove the propType related props.').toBe(true)
    expect('* Add section in README documenting use with React v15 or earlier.').toBe(true)
    expect('* If everything does not work in React v15 or earlier, see if there is a way to make it so even if it will cause extra markup.').toBe(true)
    expect('* Add section in README documenting invalid use cases.').toBe(true)
    expect('  + Non-immediate children of Then, ElseIf, Else, and When.').toBe(true)
    expect('  + Else before any When.').toBe(true)
    expect('  + Using When not as an immediate child of Case.').toBe(true)
    expect('  + Using Then not as an immediate child of If.').toBe(true)
    expect('  + Using ElseIf not as an immediate child of If.').toBe(true)
    expect('  + Using Else not as an immediate child of If or Case.').toBe(true)
    expect('* See if package.js/.files can be simplified to "*.jsx", "lib/"').toBe(true)
    expect('* Try publishing using the @qc scope if still available or use @hs if available.').toBe(true)
  })

})

describe('index.js', function () {

  describe('Conds', function () {

    it('should contain references to all conditional components', function () {
      expect(Object.keys(Conds).length).toBe(5)
      expect(Conds.Case).toBe(_Case)
      expect(Conds.Else).toBe(_Else)
      // expect(Conds.ElseIf).toBe(_ElseIf)
      expect(Conds.If).toBe(_If)
      expect(Conds.Then).toBe(_Then)
      expect(Conds.When).toBe(_When)
    })

  })

  describe('Case', function () {

    it('should be a function', function () {
      expect(typeof Case).toBe('function')
    })

    it('should be a functional component', function () {
      let comp

      comp = TestRenderer.create(
        <Case/>
      )

      // Functional components don't have instances.
      expect(comp.getInstance()).toBe(null)
    })

  })


  describe('Else', function () {

    it('should be a function', function () {
      expect(typeof Else).toBe('function')
    })

    it('should be a functional component', function () {
      let comp

      comp = TestRenderer.create(
        <Else/>
      )

      // Functional components don't have instances.
      expect(comp.getInstance()).toBe(null)
    })

  })


  xdescribe('ElseIf', function () {

    it('should be a function', function () {
      expect(typeof ElseIf).toBe('function')
    })

    it('should be a functional component', function () {
      let comp

      comp = TestRenderer.create(
        <ElseIf/>
      )

      // Functional components don't have instances.
      expect(comp.getInstance()).toBe(null)
    })

  })


  describe('If', function () {

    it('should be a function', function () {
      expect(typeof If).toBe('function')
    })

    it('should be a functional component', function () {
      let comp

      comp = TestRenderer.create(
        <If/>
      )

      // Functional components don't have instances.
      expect(comp.getInstance()).toBe(null)
    })

  })


  describe('Then', function () {

    it('should be a function', function () {
      expect(typeof Then).toBe('function')
    })

    it('should be a functional component', function () {
      let comp

      comp = TestRenderer.create(
        <Then/>
      )

      // Functional components don't have instances.
      expect(comp.getInstance()).toBe(null)
    })

  })


  describe('When', function () {

    it('should be a function', function () {
      expect(typeof When).toBe('function')
    })

    it('should be a functional component', function () {
      let comp

      comp = TestRenderer.create(
        <When/>
      )

      // Functional components don't have instances.
      expect(comp.getInstance()).toBe(null)
    })

  })

})
