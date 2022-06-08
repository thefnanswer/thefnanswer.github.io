var $html = document.getElementsByTagName('html')[0],
    $menu_opener = document.getElementById('nav-jump'),
    $menu_closer = document.getElementById('menu-close');

var $menu_opener
        .addEventListener('click', toggleDrawerNav, false);
    $menu_closer
        .addEventListener('click', toggleDrawerNav, false);

var class_names;

class_names = $html.className;
class_names = $html.getAttribute('class');

class_names += 'my-new-class-name';
// equivalent to
// class_names = class_names = 'my-new-class-name'

// or

class_names = class_names.split('');
class_names.push('my-new-class-name');
class_names = class_names.join('');

class_names = class_names
                .replace('my-new-class-name', '');

// or 

class_names = class_names
                .replace(/\bmy-new-class-name\b/, '');

class_names = class_names.split('');

var len = class_names.length,
    kept_classes = [];
while (len--) {
    if (class_names[len] != 'my-new-class-name') {
        kept_classes.push(class_names[len]);
    }
}

class_names = kept_classes.join('');
