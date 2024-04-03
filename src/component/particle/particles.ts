import type { RecursivePartial, IOptions} from 'tsparticles-engine'

export const getParticlesWithLink = (
  fullScreen: boolean,
  backgroundColor: string,
): RecursivePartial<IOptions> => {
  return {
    'detectRetina': true,
    'fpsLimit': 120,

    'fullScreen': {
      'enable': fullScreen,
      'zIndex': -1
    },

    'background': {
      'color': {
        'value': backgroundColor
      }
    },

    'particles': {
      'color': {
        'value': '#065186'
      },
      'links': {
        'color': '#0c98eb',
        'distance': 100,
        'enable': true,
        'opacity': 0.5,
        'width': 1
      },
      'move': {
        'enable': true,
        'outModes': {
          'default': 'bounce',
          'top': 'bounce',
          'bottom': 'bounce',
          'left': 'bounce',
          'right': 'bounce'
        },
        'random': true,
        'speed': 1,
        'straight': false
      },
      'number': {
        'density': {
          'enable': true,
          'area': 100
        },
        'value': 5
      },
      'opacity': {
        'value': 0.5
      },
      'shape': {
        'type': 'circle' 
      },
      'size': {
        'value': {
          'min': 1,
          'max': 5
        }
      }
    },

    'interactivity': {
      'events': {
        'onClick': {
          'enable': true,
          'mode': 'push'
        },
        'onHover': {
          'parallax': {
            'enable': true,
            'force': 10,
            'smooth': 100
          },
          'enable': false,
          'mode': 'repulse'
        },
        'resize': true
      },
      'modes': {
        'push': {
          'quantity': 2
        },
        'repulse': {
          'distance': 150,
          'duration': 0.5
        }
      }
    }
  }
}

export const getParticles = (
  fullScreen: boolean,
  backgroundColor: string,
): RecursivePartial<IOptions>  => {
  return {
    'detectRetina': true,
    'fpsLimit': 120,

    'fullScreen': {
      'enable': fullScreen,
      'zIndex': -1
    },

    'background': {
      'color': {
        'value': backgroundColor
      }
    },

    'particles': {
      'color': {
        'value': '#065186'
      },
      'move': {
        'direction': 'right',
        'enable': true,
        'outModes': {
          'default': 'bounce',
          'top': 'bounce',
          'bottom': 'bounce',
          'left': 'bounce',
          'right': 'bounce'
        },
        'random': false,
        'speed': 1,
        'straight': false
      },
      'number': {
        'density': {
          'enable': true,
          'area': 100
        },
        'value': 15
      },
      'opacity': {
        'value': 0.5
      },
      'shape': {
        'type': 'circle' 
      },
      'size': {
        'value': {
          'min': 1,
          'max': 5
        }
      }
    }
  }
}
