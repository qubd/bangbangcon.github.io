;(function(exports) {

  var talks = [
    {
      author: "David Nolen",
      authorslug: "david-nolen",
      title: "Invent the Future You Want to Live In!",
      youtube: "y2s9y8FJ5vs",
      transcript: true,
    },
    {
      author: "Ashley Blewer",
      authorslug: "ashley-blewer",
      title: "Don't know about you, but I'm feeling like SHA-2!: Checksumming with Taylor Swift",
      youtube: "1QgamEwwPro",
      transcript: true,
    },
    {
      author: "Kamal Marhubi",
      authorslug: "kamal-marhubi",
      title: "What the clock?!!",
      youtube: "Cbu6V4aDtDg",
      transcript: true,
    },
    {
      author: "Kiran Bhattaram",
      authorslug: "kiran-bhattaram",
      title: "Bending the Laws of Physics! Or, How Wi-Fi Keeps Getting Faster.",
      youtube: "tg_8H0TdpOc",
      transcript: true,
    },
    {
      author: "Josh Matthews",
      authorslug: "josh-matthews",
      title: "Time travel, gdb, elephants, and you!!!!",
      youtube: "E-VO8npCM6I",
      transcript: true,
    },
    {
      author: "Rob Jefferson",
      authorslug: "rob-jefferson",
      title: "What Programmers and Economists Can Learn from Each Other! (cancelled due to illness)",
      youtube: false,
      transcript: false,
    },
    {
      author: "Libby Horacek",
      authorslug: "libby-horacek",
      title: "Contributing to open source should be like ROLLER DERBY!!",
      youtube: "aeiG9VQT9u0",
      transcript: true,
    },
    {
      author: "Igor Wiedler",
      authorslug: "igor-wiedler",
      title: "MissingNo., my favourite Pokémon!",
      youtube: "yX7tDROZUt8",
      transcript: true,
    },
    {
      author: "Peter Boothe",
      authorslug: "peter-boothe",
      title: "QUINE + TAR = QUININE!!",
      youtube: "xv2aMLeq_Pk",
      transcript: "true",
    },
    {
      author: "Lea Albaugh",
      authorslug: "lea-albaugh",
      title: "From text to textiles!",
      youtube: "ihqcgrR0azw",
      transcript: true,
    },
    {
      author: "Jon Williams",
      authorslug: "jon-williams",
      title: "Lightpainting with Robots! And JavaScript!",
      youtube: "gux7XhKEc9o",
      transcript: true,
    },
    {
      author: "Bonnie Eisenman",
      authorslug: "bonnie-eisenman",
      title: "Music! Programming! Arduino! (Or: Building Electronic Musical Interfaces to Create Awesome)",
      youtube: "67Y-wH0FJFg",
      transcript: true,
    },
    {
      author: "Kevin Lynagh",
      authorslug: "kevin-lynagh",
      title: "I made a cell phone! (DON'T TELL THE FCC KTHX!)",
      youtube: "FlRa-iH7PGw",
      transcript: true,
    },
    {
      author: "Mary Rose Cook",
      authorslug: "mary-rose-cook",
      title: "Git from the inside out!",
      youtube: "UZ-geQQr45o",
      transcript: true,
    },
    {
      author: "Scott Vokes",
      authorslug: "scott-vokes",
      title: "The Burrows-Wheeler Transform: Better Compression with a Reversible Sort!!",
      youtube: "6hZ-j0B_Dhc",
      transcript: true,
    },
    {
      author: "Fiona Condon",
      authorslug: "fiona-condon",
      title: "Eternal Sunshine of the Spotless Search Index!!",
      youtube: "T38r5sDeUM0",
      transcript: true,
    },
    {
      author: "Nick Doiron",
      authorslug: "nick-doiron",
      title: "Git Pushes from Paradise: Adding a remote island alphabet to Wikipedia!",
      youtube: "rHaK5bW2wgQ",
      transcript: true,
    },
    {
      author: "Allison Nelson",
      authorslug: "allison-nelson",
      title: "Dissecting a Bestseller: The Art and Science of Storytelling!",
      youtube: "xWJ-JdAhLMo",
      transcript: true,
    },
    {
      author: "Joshua Wise",
      authorslug: "joshua-wise",
      title: "Recovering data from an SD card — the hard way!",
      youtube: "wEgQgj_v7T4",
      transcript: true,
    },
    {
      author: "Simon Sapin",
      authorslug: "simon-sapin",
      title: "Cross-platform file names in Rust: a wonderful and horrifying hack!",
      youtube: "K2PRjmvOY9Y",
      transcript: true,
    },
    {
      author: "Allison Kaptur",
      authorslug: "allison-kaptur",
      title: "Limitless and recursion-free recursion limits!",
      youtube: "Qk1I6ZxcceU",
      transcript: true,
    },
    {
      author: "Max Veytsman",
      authorslug: "max-veytsman",
      title: "i'm in ur javaz haxxing ur codez!",
      youtube: "6NdLZl16OkA",
      transcript: true,
    },
    {
      author: "Polina Giralt & Anita Mehrotra",
      authorslug: "polina-giralt-and-anita-mehrotra",
      title: "The Science behind #TheDress: Measuring Virality at BuzzFeed!",
      youtube: "6a7jJVvaxh0",
      transcript: true,
    },
    {
      author: "Sasha Laundy",
      authorslug: "sasha-laundy",
      title: "Spinning metal platters in the cloud!",
      youtube: "DH_PH5KbO5c",
      transcript: true,
    },
    {
      author: "Lisa van Gelder",
      authorslug: "lisa-van-gelder",
      title: "Great Caching Disasters (and how to avoid them)!",
      youtube: "VP_I9tQQpsE",
      transcript: true,
    }
  ];

  var generateTemplate = function(talk, template) {
    var newTalk = $(template).clone();
    newTalk.attr({
      id: ''
    });
    newTalk.find('.talk-info').html('<a href="./speakers.html#' + talk.authorslug + '">' + talk.author + '</a><strong><em>' + talk.title + '</em></strong>');
    if (talk.youtube) {
      newTalk.find('.talk-youtube-thumb').html('<a href="http://youtube.com/watch?v=' + talk.youtube + '"><img src="http://img.youtube.com/vi/' + talk.youtube + '/1.jpg" alt="" /></a>');
      newTalk.find('.talk-youtube').html('<a href="http://youtube.com/watch?v=' + talk.youtube + '">View on YouTube!</a>');
      newTalk.find('.talk-embed').html('<a style="text-decoration:underline">View right here!</a>').click(function(evt) {
        embed($(evt.target).parents('.talk'), talk.youtube)
      });
    } else {
      newTalk.find('.talk-youtube').text('There is no video or transcript for this talk.');
    }
    if (talk.transcript) {
      newTalk.find('.talk-transcript').html('<a href="/2015-transcripts/' + talk.authorslug + '.txt">Read the transcript!</a>');
    }
    newTalk.show();
    return newTalk;
  }

  exports.generateTalks = function(template, appendTo) {
    appendTo = $(appendTo);
    template = $(template);
    for (var i = 0; i < talks.length; i++) {
      appendTo.append(generateTemplate(talks[i], template));
    }
  }

  exports.embed = function(target, youtube) {
    $('#youtube').remove();
    var iframe = '<iframe id="youtube" width="640" height="360" src="//www.youtube.com/embed/' + youtube + '?rel=0" frameborder="0" allowfullscreen></iframe>'
    target.append(iframe);
  }

})(window);

$(document).ready(function(){
  generateTalks('#talk-template', '#talk_container');
});
