## Get started
### Requirement
1. Node / npm
2. angular CLI

### Building and serving
1. `yarn`
2. `npm run start`

## Known issues

When we first click on the 'APP1 Test1' navigation, don't wait for the page to load, click on the
'APP2 Test2' navigation, we can see that the two navigations jump back and forth, and the browser
becomes stuck, using the terminal to check the system status, Found that the browser CPU is very high.

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND                                                                    
11628 ywager   20   0 1147812 245892 134248 R 173.5  2.0   2:14.54 chrome                                                                     
11957 ywager   20   0 1517252 361960  61372 R 100.0  3.0   1:53.05 chrome

If we wait for the 'APP1 Test1' page to load, click on the 'APP2 Test2' navigation and the page will
jump to normal.
