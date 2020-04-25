import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div>
    {required ? '' : (
      <div className={styles.icon} onClick={event => setOptionValue(event.target.value)}>
        <Icon name='times-circle'></Icon>
         None
      </div>
    )}
    {values.map(value => (
      <div className={`${styles.icon} ${(currentValue === value.id ? styles.iconActive : '')}`} key={value.id} onClick={() => setOptionValue(value.id)}>
        <Icon name={value.id}></Icon>
        {value.name} {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;