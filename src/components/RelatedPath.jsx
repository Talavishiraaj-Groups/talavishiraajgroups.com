import React from 'react';
import { Link } from 'react-router-dom';
import { track } from './analytics';

/**
 * An in-body route onward, placed inside the prose rather than after it.
 *
 * Why this exists: an audit of the built pages found that most of the site had
 * no in-body link to the product or the free framework at all. The only paths
 * to them were the header, the footer and the closing call to action. That is
 * a problem in two directions.
 *
 * For a reader, a page reached from search is a dead end if the only way
 * onward is a nav bar they have to notice and interpret. NN/g's information
 * foraging work is the relevant finding: people follow a scent, and a link
 * inside the sentence that raised the question is a much stronger scent than a
 * menu item.
 *
 * For search engines, sitewide navigation and footer links are boilerplate and
 * are discounted accordingly. An editorial link inside the body carries the
 * surrounding sentence with it, which is what tells a crawler what the target
 * page is about.
 *
 * It is deliberately quiet. This is not a second call to action competing with
 * the one that closes the page, it is a sentence with a link in it.
 */
export default function RelatedPath({ children, to, label, location = 'page' }) {
  return (
    <aside className="my-10 border-l-2 border-border pl-5">
      <p className="text-sm text-gray-600 leading-relaxed">
        {children}{' '}
        <Link
          to={to}
          onClick={() => track('cta_click', { location, target: to.replace('/', '') || 'home' })}
          className="font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
        >
          {label}
        </Link>
        .
      </p>
    </aside>
  );
}
