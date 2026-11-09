# Publicar en Moodle (SCORM 1.2)

1. `python tools/build.py` → `dist/deutsch-atelier-scorm12.zip`.
2. En el curso: **Activar edición › Añadir una actividad o recurso › Paquete SCORM**.
3. Subir el zip. Recomendado:
   - *Apariencia › Mostrar el paquete:* en la página actual (o ventana nueva si se quiere pantalla completa).
   - *Calificación › Método:* sin calificación / objetos de aprendizaje.
   - *Finalización de actividad:* «El estudiante debe alcanzar el estado: completado».

## Qué registra
| Elemento | Valor |
|---|---|
| `cmi.core.lesson_status` | `incomplete` al entrar; `completed` tras visitar 3 secciones distintas o 5 minutos de uso |
| `cmi.suspend_data` | resultados de cuestionarios de gramática, simulacros realizados, última página y tema (≤ 4000 caracteres) |
| `cmi.core.session_time` | duración de la sesión |
| `cmi.core.exit` | `suspend` (para reanudar donde se quedó) |

Fuera de Moodle (abriendo el HTML directamente) la aplicación funciona igual y no registra nada.

## Vídeos
Los reproductores de YouTube solo se incrustan cuando la página se sirve por HTTP(S), como ocurre en Moodle.
Abierta como archivo local, la app muestra el enlace directo al vídeo.
