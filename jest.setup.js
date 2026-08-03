import { TextEncoder, TextDecoder } from 'util'

/* global describe, it -- Globals defined by Jest */
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
