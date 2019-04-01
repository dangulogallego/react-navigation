/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Drawer } from './src/components/navigators';
import { createAppContainer } from "react-navigation";

export default createAppContainer(Drawer);