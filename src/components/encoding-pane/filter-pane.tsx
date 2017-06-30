import * as React from 'react';
import {connect} from 'react-redux';

import * as CSSModules from 'react-css-modules';
import {FilterTransform} from 'vega-lite/build/src/transform';

import {State} from '../../models/index';
import {getFilters} from '../../selectors/index';
import * as styles from './filter-pane.scss';


export interface FilterPaneProps {
  filters: FilterTransform[];
}

class FilterPaneBase extends React.Component<FilterPaneProps, any> {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export const FilterPane = connect(
  (state: State) => {
    return {
      filters: getFilters(state)
    };
  }
)(CSSModules(FilterPaneBase, styles));
