/* eslint-env jest, node */
/* eslint max-len: "off" */
/* eslint padded-blocks: "off" */

import React from 'react'
import TestRenderer from 'react-test-renderer'

import Case from '../Case'
import Else from '../Else'
import When from '../When'

const TRUE = true

describe('Case.jsx', function () {

  describe('Case', function () {

    it('should render with no props and no children', function () {
      let comp


      comp = TestRenderer.create(
        <Case/>
      )

      expect(comp.toJSON()).toMatchSnapshot()
    })

    describe('with no `When` or `Else` children', function () {

      it('should render the children as expected', function () {
        let comp


        comp = TestRenderer.create(
          <Case>
            First child.
            <span>Second child.</span>
            {
              [
                'Third child[0].',
                'Third child[1].',
              ]
            }
          </Case>
        )

        expect(comp.toJSON()).toMatchSnapshot()
      })

    })

    describe('with one `When` child', function () {

      describe('declared with a falsy `is` property', function () {

        it('should render the `When` component\'s children as `null`', function () {
          let comp


          comp = TestRenderer.create(
            <Case>
              <When>
                I am not rendered.
              </When>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <Case>
              <When is={false}>
                I am not rendered.
              </When>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

      })

      describe('declared with a truthy `is` property', function () {

        it('should render the `When` component\'s children as expected', function () {
          let comp


          comp = TestRenderer.create(
            <Case>
              <When is={TRUE}>
                I am rendered.
              </When>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

      })

      describe(', no `Else` children, and other non-`When` children', function () {

        describe('declared with a falsy `is` property', function () {

          it('should render the `When` component\'s children as `null` and the other non-`When` children as expected', function () {
            let comp


            comp = TestRenderer.create(
              <Case>
                I am always rendered.
                <When>
                  I am not rendered.
                </When>
                I am also rendered.
              </Case>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <Case>
                I am always rendered.
                <When>
                  I am not rendered.
                </When>
                I am also rendered.
              </Case>
            )

            expect(comp.toJSON()).toMatchSnapshot()
          })

        })

        describe('declared with a truthy `is` property', function () {

          it('should render the `When` component\'s children as expected and the other non-`When` children as expected', function () {
            let comp

            comp = TestRenderer.create(
              <Case>
                I am always rendered.
                <When is={TRUE}>
                  I am rendered.
                </When>
                I am also rendered.
              </Case>
            )

            expect(comp.toJSON()).toMatchSnapshot()
          })

        })

      })

      xdescribe('and one `Else` child', function () {

        it('', function () {

        })

      })

      xdescribe('and more than one `Else` child', function () {

        it('', function () {

        })

      })

    })

    describe('with more than one `When` child', function () {

      describe('where at least one `When` child with a truthy `is` property', function () {

        it('should render only the first truthy `When`\'s children as expected', function () {
          let comp


          // First truthy When is first When:
          comp = TestRenderer.create(
            <Case>
              <When is={TRUE}>
                I am rendered.
              </When>
              <When is={TRUE}>
                I am not rendered.
              </When>
              <When>
                I am not rendered.
              </When>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          // First truthy When is intermediate When:
          comp = TestRenderer.create(
            <Case>
              <When is={false}>
                I am not rendered.
              </When>
              <When is={TRUE}>
                I am rendered.
              </When>
              <When is={TRUE}>
                I am not rendered.
              </When>
              <When>
                I am not rendered.
              </When>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          // First truthy When is last When:
          comp = TestRenderer.create(
            <Case>
              <When is={false}>
                I am not rendered.
              </When>
              <When>
                I am not rendered.
              </When>
              <When is={TRUE}>
                I am rendered.
              </When>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

      })

      xdescribe(', no `Else` children, and other non-`When` children', function () {

        it('', function () {

        })

      })

      xdescribe('and one `Else` child', function () {

        it('', function () {

        })

      })

      xdescribe('and more than one `Else` child', function () {

        it('', function () {

        })

      })

    })

    describe('with one or more `Else` child', function () {

      describe('and no `When` children', function () {

        it('should render the children as expected', function () {
          let comp


          comp = TestRenderer.create(
            <Case>
              First child.
              <span>Second child.</span>
              <Else>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Else>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <Case>
              First child.
              <Else>
                <span>Second child.</span>
              </Else>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <Case>
              <Else>
                First child.
              </Else>
              <span>Second child.</span>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <Case>
              First child.
              <Else>
                <span>Second child.</span>
              </Else>
              <Else>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Else>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <Case>
              <Else>
                First child.
              </Else>
              <span>Second child.</span>
              <Else>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Else>
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <Case>
              <Else>
                First child.
              </Else>
              <Else>
                <span>Second child.</span>
              </Else>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </Case>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

      })

    })

  })

})
