---
layout: post
title:  "Welcome to blog!"
date:   2015-11-26 11:25:44 -0500
categories: new post
---

#From Last Night: Alert This Week's Parsha.

###A javascript function to get the weekly Parsha from a json object.

In HTML:
{% highlight html %}

<p>This week's Parsha is </p>
{% endhighlight %}

In Javascript:v
{% highlight javascript %}
var parshaCal = {
"8/30/2014": "שופטים",
"9/06/2014": "כי־תצא",
"9/13/2014": "כי־תבוא",
"9/20/2014": "נצבים־וילך",
"9/27/2014": "האזינו",
"10/4/2014": "בראשית",
"10/11/2014": "בראשית",
"10/18/2014": "בראשית",
"10/25/2014": "נח"
}
var today = new Date();
var nextParsha;
$.each(parshaCal, function (key, value) {
    var s = new Date(key);
    var t = new Date(s - 604800000);
    if (t < today && s > today) {
        nextParsha = value;
    }
});
$('p').append(nextParsha);
{% endhighlight %}

