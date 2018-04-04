/* eslint-env jest, node */
/* eslint max-len: "off" */
/* eslint padded-blocks: "off" */

import React from 'react'
import TestRenderer from 'react-test-renderer'

import Case from '../Case'
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

      describe('and one `Else` child', function () {

        xit('', function () {

        })

      })

      describe('and more than one `Else` child', function () {

        xit('', function () {

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

      describe(', no `Else` children, and other non-`When` children', function () {

        xit('', function () {

        })

      })

      describe('and one `Else` child', function () {

        xit('', function () {

        })

      })

      describe('and more than one `Else` child', function () {

        xit('', function () {

        })

      })

    })

  })

})
