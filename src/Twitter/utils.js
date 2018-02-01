'use strict'

import React from 'react'
import { PixelRatio } from 'react-native'
import Dimesions from 'Dimesions'

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimesions.get('window').width,
    height: Dimesions.get('window').height
  }
}

export default Util
