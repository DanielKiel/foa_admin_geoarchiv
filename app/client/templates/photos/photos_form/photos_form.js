/*****************************************************************************/
/* PhotosForm: Event Handlers */
/*****************************************************************************/
Template.PhotosForm.events({
    'change #file-upload-input': function(event, template) {

        let element = event.target;
        let files = element.files;

        for (let file of files) {
            template.uploadFile(file);
        }
    }
});

/*****************************************************************************/
/* PhotosForm: Helpers */
/*****************************************************************************/
Template.PhotosForm.helpers({

});

/*****************************************************************************/
/* PhotosForm: Lifecycle Hooks */
/*****************************************************************************/
Template.PhotosForm.onCreated(function () {
    this.uploadFile = function(file) {
        let gallery = document.getElementById('gallery');
        let imageType = /image.*/;

        if (!file.type.match(imageType)) {
            throw "File Type must be an image";
        }

        let thumb = document.createElement("div");
        thumb.classList.add('thumbnail'); // Add the class thumbnail to the created div

        let img = document.createElement("img");
        img.file = file;
        thumb.appendChild(img);
        gallery.appendChild(thumb);

        // Using FileReader to display the image content
        let reader = new FileReader();
        reader.onload = (function(aImg) {
            return function(e) {
                aImg.src = e.target.result;
            };
        })(img);

        reader.readAsDataURL(file);

        let success = document.createElement('div');
        thumb.appendChild(success);
        success.innerHTML = '<div style="position: absolute; margin-top: -80px;" class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">uploading</div></div>';


        let url = Meteor.settings.public.serviceUrl + '/services/upload/v1/';
        let xhr = new XMLHttpRequest();
        let fd = new FormData();

        xhr.open("POST", url, true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));

        xhr.onreadystatechange = function() {

            if (xhr.readyState == 4 && xhr.status == 200) {
                // Every thing ok, file uploaded
                success.innerHTML = '<div style="position: absolute; margin-top: -80px;" class="alert alert-success" role="alert"><span class="glyphicon glyphicon-ok"></span></div>';
            }
            else {
                success.innerHTML = '<div style="position: absolute; margin-top: -80px;" class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-remove"></span></div>';
            }
        };

        fd.append("upload_file", file);
        xhr.send(fd);
    }
});

Template.PhotosForm.onRendered(function () {
});

Template.PhotosForm.onDestroyed(function () {
});
