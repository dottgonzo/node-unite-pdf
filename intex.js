"use strict";
var child_process = require("child_process");
var Promise = require("bluebird");
var pathExists = require("path-exists");
var pdftool = (function () {
    function pdftool(options) {
        this.configuration = options;
        if (options) {
        }
    }
    pdftool.prototype.unite = function (files) {
        var that = this;
        return new Promise(function (resolve, reject) {
            pathExists(files, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    child_process.exec("unite -quality 30" + files, function (err, stdout, stderr) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(true);
                        }
                    });
                }
            });
        });
    };
    return pdftool;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pdftool;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFZLGFBQWEsV0FBTSxlQUMvQixDQUFDLENBRDZDO0FBQzlDLElBQVksT0FBTyxXQUFNLFVBRXpCLENBQUMsQ0FGa0M7QUFFbkMsSUFBWSxVQUFVLFdBQU0sYUFFNUIsQ0FBQyxDQUZ3QztBQVd6QztJQUdJLGlCQUFZLE9BQWtCO1FBRTFCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFBO1FBRTVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFZCxDQUFDO0lBR0wsQ0FBQztJQUdELHVCQUFLLEdBQUwsVUFBTSxLQUFhO1FBQ2YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBRXJDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxHQUFHO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDZixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLGFBQWEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNO3dCQUNoRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDZixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDakIsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQTtnQkFFTixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFLTixDQUFDLENBQUMsQ0FBQTtJQUlOLENBQUM7SUFHTCxjQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDRDt5QkE2Q0MsQ0FBQSIsImZpbGUiOiJpbnRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gXCJjaGlsZF9wcm9jZXNzXCJcbmltcG9ydCAqIGFzIFByb21pc2UgZnJvbSBcImJsdWViaXJkXCJcblxuaW1wb3J0ICogYXMgcGF0aEV4aXN0cyBmcm9tIFwicGF0aC1leGlzdHNcIlxuXG5pbnRlcmZhY2UgSU9wdGlvbnMge1xuXG59XG5cbmludGVyZmFjZSBJUERGVG9vbHMge1xuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGRmdG9vbCBpbXBsZW1lbnRzIElQREZUb29scyB7XG4gICAgY29uZmlndXJhdGlvbjogSVBERlRvb2xzO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IElPcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gb3B0aW9uc1xuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cblxuICAgIHVuaXRlKGZpbGVzOiBzdHJpbmcpOiBQcm9taXNlPHRydWU+IHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx0cnVlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHBhdGhFeGlzdHMoZmlsZXMsIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfcHJvY2Vzcy5leGVjKFwidW5pdGUgLXF1YWxpdHkgMzBcIiArIGZpbGVzLCAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuXG5cblxuICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuXG59Il19
