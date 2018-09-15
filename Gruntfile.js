module.exports = function (grunt) {
    //需要拷贝的入口文件
    var indexArr = ['index.html','order.html'];
    //需要被替换注释的文件
    var replaceCommentsArr = ['build/index.html','build/order.html'];
    //需要压缩的html
    var htmlMinArr = ['index.html','order.html'];
    //任务配置,所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        //重新打包的时候，清除重建目录
        clean: {
            build: {
                src: ['build']
            },
            //clean:other清除其他任务
            other: {
                src: ['other']
            }
        },
        //压缩js 插件的配置:任务名
        uglify: {
            options: {
                stripBanners: true,//允许生成说明,就是压缩文件第一句
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd")%>*/\n'
            },
            build: {
                src: ['src/js/util/*.js','src/js/*.js'],//要压缩的文件(要被处理的文件)
                dest: 'build/js/share.min.js'//压缩后的文件(处理后的文件)
            },
            vendor: {
                src: 'build/js/util/util.js',
                dest: 'build/js/util/util.js'
            },


        },
        //js语法检测
        jshint: {
            build: ['Gruntfile.js', 'src/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        //css合并
        concat: {
            css: {
                src: ['src/css/*.css'],
                dest: 'build/css/share.css'
            }
        },
        //css压缩
        cssmin: {
            css: {
                src: 'build/css/share.css',
                dest: 'build/css/share.min.css'
            }
        },
        //替换
        replace: {
            html: {
                src: replaceCommentsArr,
                overwrite: true,
                replacements: [
                    {
                        from: /<!-- startbuild:css -->/g,
                        to: "<!--"
                    },
                    {
                        from: /<!-- endbuild:css -->/g,
                        to: " --><link rel=\"stylesheet\" href=\"css/share.min.css\"/>"
                    },
                    {
                        from: /<!-- startbuild:js -->/g,
                        to: "<!--"
                    },
                    {
                        from: /<!-- endbuild:js -->/g,
                        to: " --><script src=\"js/share.min.js\"></script>"
                    }]
            }
        },
        //拷贝文件
        copy: {
            react: {
                expand: true,
                cwd: 'src/',
                src: 'js/react-components/*',
                dest: 'build/',
            },
            util: {
                expand: true,
                cwd: 'src/',
                src: 'js/util/*',
                dest: 'build/',
            },
            vendor: {
                expand: true,
                cwd: 'src/',
                src: 'js/vendor/*',
                dest: 'build/',
            },

            images: {
                expand: true,
                cwd: 'src/',
                src: 'assets/*/*',
                dest: 'build/',
            },
            index: {
                expand: true,
                cwd: 'src/',
                src: indexArr,
                dest: 'build/',
            },

        },
        //压缩html
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: [
                    {
                        expand: true,
                        cwd: 'build/',
                        src: htmlMinArr,
                        dest: 'build/'
                    }
                ]
            }
        },
    });
    //告诉grunt使用插件
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default',
        [
            'clean:build',
            'copy:vendor', 'copy:images', 'copy:index','copy:react','copy:util',
            'jshint',
            'uglify',
            'concat',
            'cssmin',
            'replace:html',
            'htmlmin'
        ]);

};


