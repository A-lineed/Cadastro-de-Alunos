// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/alunos.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_escapeScript = require("marko/src/runtime/html/helpers/escape-script-placeholder"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Alunos</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><link href=https://fonts.googleapis.com/css2?family=Modak&display=swap rel=stylesheet></head><body><div class=container><link rel=preconnect href=https://fonts.gstatic.com><div class=card-panel><span class=\"blue-text text-darken-2\">ALUNOS</span></div><a href=/form class=\"btn-floating btn-large waves-effect waves-light light-blue\"><i class=material-icons>add</i></a><table><thead><th>Id</th><th>Nome</th><th>Curso</th><th>Opções</th></thead>");

  var $for$0 = 0;

  marko_forOf(data.results, function(aluno, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(aluno.id) +
      "</td><td>" +
      marko_escapeXml(aluno.nome) +
      "</td><td>" +
      marko_escapeXml(aluno.curso) +
      "</td><td><a style=\"margin-right: 10pt\"" +
      marko_attr("href", "/form/" + (aluno.id == null ? "" : aluno.id)) +
      " class=\"btn-floating btn-small waves-effect waves-light cyan accent-3\"><i class=material-icons>edit</i></a><a" +
      marko_attr("href", "/alunos/delete/" + (aluno.id == null ? "" : aluno.id)) +
      " class=\"btn-floating btn-small waves-effect waves-light cyan accent-2\"><i class=material-icons>delete</i></a></td></tr>");
  });

  out.w("</table></div><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script>");

  marko_forOf(data.error_messages, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("\r\n                M.toast({\r\n                    html: '" + message) + "',\r\n                    classes: 'red lighten-2'\r\n                })\r\n            ") +
      "</script>");
  });

  out.w(" ");

  marko_forOf(data.success_messages, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("\r\n                 M.toast({\r\n                    html: '" + message) + "',\r\n                    classes: 'green lighten-4'\r\n                })\r\n            ") +
      "</script>");
  });

  out.w(" ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/alunos.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
