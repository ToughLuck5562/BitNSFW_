
(function(){
    var a=['addEventListener','DOMContentLoaded','getElementById','register-form','submit','preventDefault','register-form-username-input','value','https://ipinfo.io/json','then','json','ip','http://localhost:5000/register-account-api','POST','application/json','bitnsfwoffical.vercel.app/register-account','stringify','ok','Error:','log','Success:','error'];
    var b=function(c,d){c=c-0;var e=a[c];return e};
    document[b('0')](b('1'),function(){
        var f=document[b('2')](b('3'));
        f[b('0')](b('4'),function(g){
            g[b('5')]();
            var h=document[b('2')](b('6'))[b('7')];
            fetch(b('8'))[b('9')](function(i){return i[b('10')]()})[b('9')](function(j){
                var k=j[b('11')];
                var l={Username:h,UserIP:k};
                return fetch(b('12'),{method:b('13'),headers:{'Content-Type':b('14'),'X-Referer':b('15')},body:JSON[b('16')](l)});
            })[b('9')](function(m){
                if(!m[b('17')]){return m[b('10')]()[b('9')](function(n){throw new Error(n);});}
                return m[b('10')]();
            })[b('9')](function(o){
                console[b('19')](b('20'),o);
            })[b('21')](function(p){
                console[b('21')](b('18'),p);
            });
        });
    });
})();