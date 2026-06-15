#!/usr/bin/perl
use strict;
use warnings;
use HTTP::Daemon;
use HTTP::Status;
use File::Basename;

# Évite que le serveur meure quand un navigateur ferme la connexion (broken pipe / SIGPIPE)
$SIG{PIPE} = 'IGNORE';

my $ROOT = '/Users/tim/Documents/Cours/BUT GEA 3/PORTFOLIO/Claude';
my $PORT = $ENV{PORT} || 3456;

my %MIME = (
  html => 'text/html; charset=utf-8',
  css  => 'text/css',
  js   => 'application/javascript',
  png  => 'image/png',
  jpg  => 'image/jpeg',
  jpeg => 'image/jpeg',
  gif  => 'image/gif',
  svg  => 'image/svg+xml',
  ico  => 'image/x-icon',
  woff => 'font/woff',
  woff2=> 'font/woff2',
);

my $d = HTTP::Daemon->new(LocalAddr => '127.0.0.1', LocalPort => $PORT, ReuseAddr => 1)
  or die "Cannot start server: $!";

print "Portfolio server running at " . $d->url . "\n";

while (my $c = $d->accept) {
  while (my $r = $c->get_request) {
    my $path = $r->uri->path;
    $path = '/index.html' if $path eq '/';
    $path =~ s/\.\.//g;  # security: no path traversal

    my $file = $ROOT . $path;

    if (-f $file) {
      my ($ext) = $file =~ /\.(\w+)$/;
      my $mime = $MIME{lc($ext || '')} || 'application/octet-stream';
      $c->send_file_response($file);
    } else {
      $c->send_error(RC_NOT_FOUND, "Not found: $path");
    }
  }
  $c->close;
}
