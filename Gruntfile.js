module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: ['Gruntfile.js', 'api/**/*.js', 'api/*.js'],
			options: {
				browser: true
			}
		},
		uglify: {
			build: {
				src: ['api/**/*.js', 'api/*.js'],
				dest: 'api.min.js'
			}
		},
		watch: {
			scripts: {
				files: ['api/**/*.js', 'api/*.js'],
				tasks: ['uglify:build', 'jshint']
			}
		},
		copy: {
			main: {
				files: [
					{
						src: ['api.min.js'],
    					dest: 'docs/explicitly/api.min.js'
					}, {
						src: ['api.min.js'],
    					dest: 'docs/automatically/api.min.js'
					}
				]			
  			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['watch', 'jshint', 'uglify', 'copy']);

};