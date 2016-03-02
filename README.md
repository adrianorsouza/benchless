Performance comparison between [LESS], [Ruby-Sass] and [Libsass][libsass]
------------------------------------------------------------------------------------

This will process [bootstrap] v3.3.6 `less` and `scss` files using Grunt Task Runner with different CSS pre-processors, then compare each one is the fastest.

### Dependencies:

- node
- ruby v2.0+

### Benchmark

Test build all components of [bootstrap].

Results:

|**Pre-Processor**  | elapsed time            |
|-------------------|-------------------------|
|**LESS**           | `Completed in 1.643s`   |
|**Ruby-sass:**     | `Completed in 3.659s`   |
|**Libsass**        | `Completed in 0.608s`   |


## Setup environment

Grunt Task Runner.

	npm install

Bower Components.

	bower install

### Test with Ruby-Sass

##### 1. Install Ruby-Sass:

	gem install sass
	sass -v

	# Sass 3.4.21 (Selective Steve)

##### Run the test

	grunt watch:sass

### 2. Test with LESS

	grunt watch:less

### 3. Test with Libsass

##### 1. Compile the and install [sassc].

	mkdir -p /usr/local/src

	cd /usr/local/src

##### 2. Download the `libsass` source:

	git clone git@github.com:sass/libsass.git

##### 3. Download the `sassc` source:

	git clone git@github.com:sass/sassc.git

##### 4. Build and install.

	export SASS_LIBSASS_PATH=${PWD}/libsass

	cd sassc

	make

##### 5. Config your PATH.
> Point libsass in your environment. It will overwrite the ruby-installation in your path.

	ln -svf /usr/local/src/sassc/bin/sassc /usr/local/bin/sass

	export PATH=/usr/local/bin:$PATH

	which sass

	# /usr/local/bin/sass

	sass -v

	# sassc: 3.3.0-10-g8d3d
	# libsass: 3.3.3-30-gb684
	# sass2scss: 1.0.5

##### Ok, run the test with libsass:

	grunt watch:sass


[less]: http://lesscss.org
[ruby-sass]: http://sass-lang.com
[libsass]: http://sass-lang.com/libsass
[sassc]: https://github.com/sass/sassc
[bootstrap]: http://getbootstrap.com
