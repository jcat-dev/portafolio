import type { RecursivePartial, IOptions} from 'tsparticles-engine'

export const particleCircle: RecursivePartial<IOptions> = {
  'detectRetina': true,
  'fpsLimit': 120,

  'fullScreen': {
    'enable': false,
    'zIndex': -1
  },

  'background': {
    'color': {
      'value': '#000000'
    }
  },

  'particles': {
    'color': {
      'value': '#065186'
    },
    'links': {
      'color': '#0c98eb',
      'distance': 150,
      'enable': true,
      'opacity': 0.5,
      'width': 2
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

export const particleLinks: RecursivePartial<IOptions> = {
  'detectRetina': true,
  'fpsLimit': 120,

  'fullScreen': {
    'enable': false,
    'zIndex': -1
  },

  'background': {
    'color': {
      'value': '#000000'
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
